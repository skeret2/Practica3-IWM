<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HobbyController;
use App\Http\Controllers\FrameworkController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/profile', [ProfileController::class,'getProfile']);
Route::put('/profile/{id}', [ProfileController::class,'edit']);
Route::put('/hobby/{id}', [HobbyController::class,'edit']);
Route::put('/framework/{id}', [FrameworkController::class,'edit']);
