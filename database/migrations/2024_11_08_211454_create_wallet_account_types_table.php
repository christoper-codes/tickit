<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('wallet_account_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('wallet_currency_id')->constrained('wallet_currencies')->onDelete('cascade');
            $table->string('name')->unique();
            $table->string('color')->nullable();
            $table->string('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wallet_account_types');
    }
};
