<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Http\Services\UserService;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Response as InertiaResponse;

class AuthController extends Controller
{
    /**
     * @var UserService $_service
     */
    protected UserService $_service;

    /**
     * Constructor
     *
     * @param UserService $service
     */
    public function __construct(UserService $service)
    {
        $this->_service = $service;
    }

    /**
     * Auth View
     * @return InertiaResponse
     */
    public function view(): InertiaResponse
    {
        return inertia('Auth');
    }

    /**
     * Login
     * @param LoginRequest request
     * @return Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $validator =  $request->validated();
        if (!User::query()->where('email', $validator['email'])->count()) {
            User::query()->create([
                'email' => $validator['email'],
                'name' => 'User Name',
                'password' => Hash::make($validator['password']),
            ]);
        }
        $this->_service->authenticate($request->only(['email', 'password']));
        return $this->_service->authResponse($request);
    }

    /**
     * register
     * @param RegisterRequest request
     * @return Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request)
    {
        $validator = $request->validated();
        User::query()->create([
            'email' => $validator['email'],
            'name' => $validator['name'],
            'password' => Hash::make($validator['password']),
        ]);
        $this->_service->authenticate(['email' => $validator['email'], 'password' => $validator['password']]);
        return $this->_service->authResponse($request);
    }
}
