<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hobby;
use Illuminate\Support\Facades\Validator;

class HobbyController extends Controller
{
    public function edit(Request $request, $id)
    {
        //valida los datos
        $validator = Validator::make($request->all(), [
            'name_hobby' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        //actualiza los datos
        $hobby = Hobby::find($id);
        $hobby->name_hobby = $request->name_hobby;
        $hobby->description = $request->description;
        $hobby->save();

        //retorna los datos actualizados
        return response()->json($hobby);

    }
}
