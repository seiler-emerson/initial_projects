#include <MIDI.h>
#include <Keypad.h>

const byte ROWS = 6; // 6 Linhas
const byte COLS = 11; // 11 Colunas
 
char keys[ROWS][COLS] = {
{36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96},
{37, 43, 49, 55, 61, 67, 73, 79, 85, 91, 97},
{38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98},
{39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99},
{40, 46, 52, 58, 64, 70, 76, 82, 88, 94, 100},
{41, 47, 53, 59, 65, 71, 77, 83, 89, 95, 101}
};
 
byte rowPins[ROWS] = {22, 26, 30, 34, 38, 42}; //connect to the row pinouts of the kpd
byte colPins[COLS] = {23, 27, 31, 35, 39, 43, 45, 47, 49, 51, 53}; //connect to the column pinouts of the kpd

Keypad kpd = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );

byte pressed = 32;
byte chanel = 0; // MIDI channel to use

void setup() {
 Serial.begin(115200); // set this the same as Hairless
}


void loop() {
 // Fills kpd.key[49] array with up-to 10 active keys.
 // Returns true if there are ANY active keys.
 if (kpd.getKeys())
 {
   for (int i = 0; i < LIST_MAX; i++) // Scan the whole key list.
   {
     if ( kpd.key[i].stateChanged )   // Only find keys that have changed state.
     {
       pressed = kpd.key[i].kchar + 12;
       switch (kpd.key[i].kstate) {  // Report active key state : IDLE, PRESSED, HOLD, or RELEASED
         case PRESSED:
           sendMIDI(chanel | 0x90, pressed, 100);
           break;
          case RELEASED:
           sendMIDI(chanel | 0x80, pressed, 64);
           break;
       }
     }
   }
 }
}  // End loop

void sendMIDI(byte type, byte note, byte velocity){
  Serial.write(type);
  Serial.write(note & 0x7F);
  Serial.write(velocity);
}
