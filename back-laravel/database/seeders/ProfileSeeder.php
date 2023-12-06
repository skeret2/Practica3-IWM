<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insertar un perfil con un hobby y un framework
        DB::table('profiles')->insert([
            'name' => 'Scarlett Annais',
            'lastname' => 'Zapata Cortes',
            'email' => 'scarlett.zapata@alumnos.ucn.cl',
            'city' => 'Antofagasta',
            'country' => 'Chile',
            'summary' => 'Soy estudiante de ultimo año en la Universidad Catolica del Norte (sede Antofagasta)',
        ]);

        // Insertar el hobby correspondiente al perfil
        DB::table('hobbies')->insert([
            [
            'name_hobby' => 'Videojuegos',
            'description' => 'Me gusta jugar videojuegos en mi tiempo libre, me gusta jugar juegos de aventura, shooter o rpg.',
            'profile_id' => 1,  // Reemplaza con el ID del perfil
            ],
            [
            'name_hobby' => 'Escuchar musica',
            'description' => 'Me gusta escuchar musica en mi tiempo libre, me gusta escuchar musica pop, coreana, latina, etc.',
            'profile_id' => 1,
            ],
            [
            'name_hobby' => 'Ver series',
            'description' => 'Me gusta ver series en mi tiempo libre, me gusta ver series de comedia, drama,doramas,marvel, etc.',
            'profile_id' => 1,
            ],
        ]);

        // Insertar el framework correspondiente al perfil
        DB::table('frameworks')->insert([
            [
            'name_framework' => 'Laravel',
            'level' => 'Nivel medio',
            'year' => 2021,
            'profile_id' => 1,
            ],
            [
            'name_framework' => 'React',
            'level' => 'Nivel basico',
            'year' => 2023,
            'profile_id' => 1,
            ],
            [
            'name_framework' => 'React Native',
            'level' => 'Nivel basico',
            'year' => 2023,
            'profile_id' => 1,
            ],
        ]);
    }
}
