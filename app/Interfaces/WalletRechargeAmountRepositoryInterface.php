<?php

namespace App\Interfaces;

interface WalletRechargeAmountRepositoryInterface
{
     /*
    * |--------------------------------------------------------------------------
    * | Primaries methods for the repository interface
    */
    public function getAll();
    public function find(int $id);
}
