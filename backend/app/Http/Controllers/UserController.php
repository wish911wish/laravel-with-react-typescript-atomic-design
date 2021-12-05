<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Index', [
            'data' => User::all()->toArray()
        ]);
    }
}