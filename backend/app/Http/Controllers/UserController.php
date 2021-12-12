<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('User/Index', [
            'data' => User::all()->toArray()
        ]);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('User/Create');
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        dd($request->input());
        return redirect()->route('user.index');
    }
}
