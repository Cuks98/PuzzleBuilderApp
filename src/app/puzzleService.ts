import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Puzzle } from './puzzle';

@Injectable()
export class PuzzleService {
    creatorNames: string[] = [
        "kiwi",
        "neptune",
        "thethirdmanA",
        "thethirdmanA",
        "cheesesticks",
        "persona",
        "archery",
        "animaltracks",
        "beforesunset",
        "brownrice",
        "sunsetblvd",
        "thething"
    ]

    puzzleNames: string[] = [
        "Bamboo Watch", 
        "Black Watch", 
        "Blue Band", 
        "Blue T-Shirt", 
        "Bracelet", 
        "Brown Purse", 
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }


    getMostPlayedPuzzles(): Observable<Puzzle[]> {
        return this.http.get<Puzzle[]>("../assets/puzzles.json");
    }

    getBestSelingPuzzles(): Observable<Puzzle[]> {
        return this.http.get<Puzzle[]>("../assets/puzzles-best-seling.json");
    }
}