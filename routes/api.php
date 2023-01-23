<?php

use App\Http\Controllers\User\AuthController;
use Illuminate\Support\Facades\Route;

/**
 * -----------------------------------------
 *	Auth
 * -----------------------------------------
 */
Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
});
