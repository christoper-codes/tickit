<?php

namespace Database\Seeders;

use App\Models\GlobalSeasonType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GlobalSeasonTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        GlobalSeasonType::create([
            'name' => 'general',
            'description' => 'temporada general',
            'is_active' => true,
        ]);
    }
}
