<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Todo extends Controller
{
    public function index()
    {
        $todos = \App\Todo::all();
        return response()->json($todos);
    }

    public function create()
    {

    }

    public function store(Request $request) {
        $todo = new \App\Todo([
            'content' => $request->get('content')
        ]);
        $todo->save();
        return response()->json('Added');
    }
}
