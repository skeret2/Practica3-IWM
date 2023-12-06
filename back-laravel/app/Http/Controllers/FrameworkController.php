<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Framework;
use Illuminate\Support\Facades\Validator;


class FrameworkController extends Controller
{
    public function edit(Request $request, $id)
    {
        //valida los datos
        $validator = Validator::make($request->all(), [
            'name_framework' => 'required|string',
            'level' => 'required|string',
            'year' => 'required|int',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        //actualiza los datos
        $framework = Framework::find($id);
        $framework->name_framework = $request->name_framework;
        $framework->level = $request->level;
        $framework->year = $request->year;
        $framework->save();

        //retorna los datos actualizados
        return response()->json($framework);


    }
}
