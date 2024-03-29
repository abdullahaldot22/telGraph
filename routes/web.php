<?php

use App\Http\Controllers\Frontend\frontendRouteController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
// Backend @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@








// Frontend @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Route::inertia('/Welcome', 'Frontend/Pages/Welcome')->name('welcome');
Route::get('/login', [frontendRouteController::class, 'login_page'])->name('login.page');
Route::get('/register', [frontendRouteController::class, 'register_page'])->name('register.page');
Route::get('/', [frontendRouteController::class, 'home'])->name('home.page');

// Route::get('/', function () {
    //     return Inertia::render('Frontend/Pages/Welcome', [
        //         'canLogin' => Route::has('login'),
        //         'canRegister' => Route::has('register'),
        //         'laravelVersion' => Application::VERSION,
        //         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->middleware(['auth', 'verified'])->name('dashboard');

    // Route::middleware('auth')->group(function () {
        //     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        //     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        //     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        // });

require __DIR__.'/auth.php';
