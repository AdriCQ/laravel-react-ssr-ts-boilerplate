<?php

namespace App\Http\Services;

use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

/**
 *  UserService
 */
class UserService
{
    /**
     * Authenticate users
     * @param array $credentials
     * @throws AuthenticationException
     * @return User
     */
    public function authenticate(array $credentials): User
    {
        if (auth()->attempt($credentials)) {
            return auth()->user();
        }
        throw new AuthenticationException();
    }

    /**
     * authResponse
     *
     * @param LoginRequest|RegisterRequest $request
     * @throws AuthenticationException
     * @return JsonResponse
     */
    public function authResponse(LoginRequest|RegisterRequest $request): JsonResponse
    {
        if (!auth()->check()) throw new AuthenticationException();
        $user = User::find(auth()->id());
        $token = $user->createToken($request->token_name)->plainTextToken;
        return response()->json([
            'user' => $user,
            'token' => $token
        ], 200, [], JSON_NUMERIC_CHECK);
    }
}
