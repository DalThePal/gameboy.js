const { Gameboy } = require('./gameboy.js');
const { Util }    = require('./util.js');
const { cpuOps }  = require('./cpuOps.js');
const { opcodes } = require('./opcodes.js');
const { CPU }     = require('./cpu.js');
const { Memory }  = require('./memory.js');
const { Exception } = require('./exception.js');
const { ext_ram }   = require('./ext_ram.js');
const { Timer }     = require('./timer.js');
const { MBC }       = require('./mbc.js');
const { Serial }    = require('./serial.js');
const { DropFileReader } = require('./rom/drop_file_reader');
const { AjaxReader }      = require('./rom/ajax_reader');
const { ROM }             = require('./rom/rom.js');
const FileReader          = require('./rom/file_reader.js');
const { Screen }          = require('./display/screen.js');
const { GPU }             = require('./display/gpu.js');
const { APU }             = require('./sound/apu.js');
const Channel4            = require('./sound/channel4');
const Channel3            = require('./sound/channel3');
const Channel1            = require('./sound/channel1');
const Keyboard            = require('./input/keyboard');
const Input               = require('./input/input');
const Gamepad             = require('./input/gamepad');

var GameboyJS = {};

GameboyJS.Util        = Util(GameboyJS);
GameboyJS.cpuOps      = cpuOps(GameboyJS);

let opcodemaps        = opcodes(GameboyJS);

GameboyJS.opcodeCbmap = opcodemaps.opcodeCbmap;
GameboyJS.opcodemap   = opcodemaps.opcodeMap;
GameboyJS.CPU         = CPU(GameboyJS);
GameboyJS.Memory      = Memory(GameboyJS);
GameboyJS.Exception   = Exception(GameboyJS);
GameboyJS.ext_ram     = ext_ram(GameboyJS);
GameboyJS.Timer       = Timer(GameboyJS);
GameboyJS.MBC         = MBC(GameboyJS);
GameboyJS.DummySerial   = Serial(GameboyJS);
GameboyJS.RomDropFileReader = DropFileReader(GameboyJS);
GameboyJS.RomAjaxReader     = AjaxReader(GameboyJS);
GameboyJS.Rom               = ROM(GameboyJS);
GameboyJS.RomFileReader     = FileReader(GameboyJS);
GameboyJS.Screen            = Screen(GameboyJS);
GameboyJS.GPU               = GPU(GameboyJS);
GameboyJS.APU               = APU(GameboyJS);
GameboyJS.Channel4          = Channel4(GameboyJS);
GameboyJS.Channel3          = Channel3(GameboyJS);
GameboyJS.Channel1          = Channel1(GameboyJS);
GameboyJS.Keyboard          = Keyboard(GameboyJS);
GameboyJS.Input             = Input(GameboyJS);
GameboyJS.Gamepad           = Gamepad(GameboyJS);
GameboyJS.Gameboy           = Gameboy(GameboyJS);

console.log(GameboyJS)

module.exports = GameboyJS;
