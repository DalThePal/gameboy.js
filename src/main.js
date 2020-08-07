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
const { FileReader }      = require('./rom/file_reader.js');
const { Screen }          = require('./display/screen.js');
const { GPU }             = require('./display/gpu.js');

var GameboyJS = {};

GameboyJS.Util        = Util(GameboyJS);
GameboyJS.cpuOps      = cpuOps(GameboyJS);

let opcodemaps        = opcodes(GameboyJS);

GameboyJS.opcodeCbmap = opcodemaps.opcodeCbmap;
GameboyJS.opcodemap   = opcodemaps.opcodeMap;
GameboyJS.Gameboy     = Gameboy(GameboyJS);
GameboyJS.CPU         = CPU(GameboyJS);
GameboyJS.Memory      = Memory(GameboyJS);
GameboyJS.Exception   = Exception(GameboyJS);
GameboyJS.ext_ram     = ext_ram(GameboyJS);
GameboyJS.Timer       = Timer(GameboyJS);
GameboyJS.MBC         = MBC(GameboyJS);
GameboyJS.DummySerial   = Serial(GameboyJS);
GameboyJS.RomDropFileReader = DropFileReader(GameboyJS);
GameboyJS.RomAjaxReader     = AjaxReader(GameboyJS);
GameboyJS.ROM               = ROM(GameboyJS);
GameboyJS.RomFileReader     = FileReader(GameboyJS);
GameboyJS.Screen            = Screen(GameboyJS);
GameboyJS.GPU               = GPU(GameboyJS);

console.log(GameboyJS)
