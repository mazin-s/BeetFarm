import { print, promptNumber, promptString } from "introcs";

export let main = async () => {   
    
    // 3.1: Status variables and Number of Beets
    // let numberOfBeats: number;
    let alive = true; // 3.1a)
    let thirstLevel = 50; // 3.1b)
    let bearLikeliness = 50; // 3.1b)
    let isHarvestTime = false; // 3.1b)
    let day = 0;  // 3.1c)
    let beetsCount = 10; // 3.1d)
    
    // 3.2
    while ( (isHarvestTime === false) && (alive  === true)) { // 3.2 a)
        print("Day: " + day); // 3.2 b)
    
        let waterSprayOrHarvest = await promptString("Do you want to water, spray, or harvest your "  +  beetsCount + " beets? Type 'water','spray', or 'harvest'."); // 3.2 c)
        day = day + 1;
        if (waterSprayOrHarvest  === "water") { // 3.2d 1)
            print(beetsCount + " beets have been watered!"); // 3.2d 1)
            thirstLevel = thirstLevel - 10; // 3.2d 1)
            bearLikeliness = bearLikeliness + 10; // 3.2d 1)
            beetsCount = beetsCount + 2; // 3.2d 1)
        } else if (waterSprayOrHarvest === "spray") { // 3.2d 2
            print(beetsCount + " beets have been sprayed!"); // 3.2d 2
            thirstLevel = thirstLevel + 10; // 3.2d 2
            bearLikeliness = bearLikeliness - 5; // 3.2d 2
        } else if (waterSprayOrHarvest === "harvest") { // 3.2d 3
            print(beetsCount + " beets have been harvested!"); // 3.2d 3
            isHarvestTime = true; // 3.2d 3
        } else {
            print(beetsCount + " beets were not watered, sprayed, or harvested."); // 3.2d 4
            thirstLevel = thirstLevel + 10; // 3.2d 4
            bearLikeliness = bearLikeliness + 10; // 3.2d 4
        }

        if (thirstLevel <= 0 ) { // 3.3 1)
            print("Your " + beetsCount + " beets have been overwatered"); // 3.3 1)
            alive = false; // 3.3 1)
        } else if (thirstLevel > 100) { // 3.3 2)
            print("Your " + beetsCount + " beats have been dehydrated"); // 3.3 2)
            alive = false; // 3.3 2)
        } else if (bearLikeliness >= 100) { // 3.3 3)
            print("Your " + beetsCount + " were eaten by bears."); // 3.3 3)
            alive = false; // 3.3 2)
        }
        
        if ( (alive === true) && (isHarvestTime === false ) ) { // 3.4
            print("Your " + beetsCount + " beets are alive!"); // 3.4
            print("Thirst level of " + beetsCount + " beets: " + thirstLevel); // 3.4
            print("Likeliness of Bear Attack of " + beetsCount + " beets: " + bearLikeliness); // 3.4
            
        }
    }
    if ( (alive === true) && (isHarvestTime === true) ) { // 3.5
        print("Your " + beetsCount + " were harvested after " + day + " days :)"); // 3.5
    } else if ( (alive === false) && (isHarvestTime === false) ) { // 3.5 harvest to true
        print("This means that " + beetsCount + " beets have died after " + day + " days :( "); 
    }
};
main();