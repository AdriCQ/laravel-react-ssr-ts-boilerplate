<?php

namespace App\Http\Controllers;

class InertiaController extends Controller
{

    public function welcome()
    {
        return inertia('Welcome');
    }

    public function auth()
    {
        return inertia('Auth');
    }
}
