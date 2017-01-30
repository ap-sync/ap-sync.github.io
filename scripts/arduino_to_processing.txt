#include <AP_Sync.h>

AP_Sync streamer(Serial);

String MyPets[4] = {"dog","cat","parrot","snake"};

void setup() {
  Serial.begin(9600);
}

void loop() {
  streamer.sync("randomPet",MyPets[random(0,3)]);
  streamer.sync("randomRed",random(0,255));
  streamer.sync("randomGreen",random(0,255));
  streamer.sync("randomBlue",random(0,255));
  delay(1000);
}