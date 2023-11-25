class Sled
{
  // private
  #byteOffset = 0

  constructor(buffer)
  {
    this.isRaceOn = this.#readInt(buffer)
    this.timestamp = this.#readUInt(buffer)
    this.engineMaxRPM = this.#readFloat(buffer)
    this.engineIdleRPM = this.#readFloat(buffer)
    this.currentEngineRpm = this.#readFloat(buffer)
  };

  #readInt(buffer)
  {
    var int = buffer.readInt32LE(this.#byteOffset)
    this.#byteOffset += 4
    return int
  }

  #readUInt(buffer)
  {
    var int = buffer.readUInt32LE(this.#byteOffset)
    this.#byteOffset += 4
    return int
  }

  #readFloat(buffer)
  {
    var float = buffer.readFloatLE(this.#byteOffset)
    this.#byteOffset += 4
    return float
  }

  toString() 
  {
    return `
    {
      isRaceOn : ${this.isRaceOn},
      timestamp : ${this.timestamp},
      engineMaxRPM : ${this.engineMaxRPM},
      engineIdleRPM : ${this.engineIdleRPM},
      currentEngineRpm : ${this.currentEngineRpm}\n
    }`
  }
};

module.exports = { Sled }