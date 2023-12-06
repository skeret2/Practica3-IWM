<?php

namespace App\Http\Controllers;
use App\Models\Profile;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfile()
    {
        $profiles = Profile::with('hobbies', 'frameworks')->get();
        return response()->json($profiles);
    }

    public function edit(Request $request, $id)
    {
        //valida los datos
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'lastname' => 'required|string',
            'city' => 'required|string',
            'country' => 'required|string',
            'summary' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        //actualiza los datos
        $profile = Profile::find($id);
        $profile->name = $request->name;
        $profile->lastname = $request->lastname;
        $profile->city = $request->city;
        $profile->country = $request->country;
        $profile->summary = $request->summary;
        $profile->save();

        //retorna los datos actualizados
        return response()->json($profile);

    }

}

