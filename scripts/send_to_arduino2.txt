#include <AP_Sync.h>

AP_Sync streamer(Serial);

void setup() {
  Serial.begin(9600);
  pinMode(13,OUTPUT);
}

void loop() {
  if(Serial.available()){
    String command = Serial.readString();
    if(command == "on"){
      digitalWrite(13,HIGH);
    }else if (command == "off") {
      digitalWrite(13,LOW);
    }else {
      digitalWrite(13,HIGH);
      delay(200);
      digitalWrite(13,LOW);
      delay(200);
      digitalWrite(13,HIGH);
      delay(200);
      digitalWrite(13,LOW);
    }
  }
}