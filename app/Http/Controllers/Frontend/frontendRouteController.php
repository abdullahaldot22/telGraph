<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class frontendRouteController extends Controller
{
    function login_page(){
        return Inertia::render('Frontend/Pages/Auth/Login');
    }
    function register_page(){
        return Inertia::render('Frontend/Pages/Auth/Register');
    }
    function home(){
        return Inertia::render('Frontend/Pages/Home');
    }
}
