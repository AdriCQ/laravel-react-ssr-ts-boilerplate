<?php

use App\Http\Controllers\InertiaController;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

/**
 * -----------------------------------------
 *	SSR Routes
 * -----------------------------------------
 */

Route::get('', [InertiaController::class, 'welcome'])->name('welcome');
Route::get('auth', [InertiaController::class, 'auth'])->name('login');
/**
 * -----------------------------------------
 *	Admin
 * -----------------------------------------
 */

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
