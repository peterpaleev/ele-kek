<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/home', function () {
    return view('home');
});
Route::get('/evgeny', function () {
    return view('contact_page');
});
Route::get('/peter', function () {
    return view('contact_page_peter');
});
Route::get('/kelvin', function () {
    return view('contact_page_kelvin');
});

