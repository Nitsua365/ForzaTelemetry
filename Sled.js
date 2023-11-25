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
    this.acceleration = { X: this.#readFloat(buffer), Y: this.#readFloat(buffer), Z: this.#readFloat(buffer) }
    this.velocity = { X: this.#readFloat(buffer), Y: this.#readFloat(buffer), Z: this.#readFloat(buffer) }
    this.angularVelocity = { X: this.#readFloat(buffer), Y: this.#readFloat(buffer), Z: this.#readFloat(buffer) }
    this.yaw = this.#readFloat(buffer)
    this.pitch = this.#readFloat(buffer)
    this.roll = this.#readFloat(buffer)
    this.normalizedSuspensionTravelFrontLeft = this.#readFloat(buffer);
    this.normalizedSuspensionTravelFrontRight = this.#readFloat(buffer);
    this.normalizedSuspensionTravelRearLeft = this.#readFloat(buffer);
    this.normalizedSuspensionTravelRearRight = this.#readFloat(buffer);
    this.tireSlipRatioFrontLeft = this.#readFloat(buffer);
    this.tireSlipRatioFrontRight = this.#readFloat(buffer);
    this.tireSlipRatioRearLeft = this.#readFloat(buffer);
    this.tireSlipRatioRearRight = this.#readFloat(buffer);
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
      currentEngineRpm : ${this.currentEngineRpm},
      acceleration: ${JSON.stringify(this.acceleration, undefined, 2)},
      velocity: ${JSON.stringify(this.velocity, undefined, 2)},
      angularVelocity: ${JSON.stringify(this.angularVelocity, undefined, 2)}
    }`
  }
};

module.exports = { Sled }