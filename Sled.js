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

    this.normalizedSuspensionTravelFrontLeft = this.#readFloat(buffer)
    this.normalizedSuspensionTravelFrontRight = this.#readFloat(buffer)
    this.normalizedSuspensionTravelRearLeft = this.#readFloat(buffer)
    this.normalizedSuspensionTravelRearRight = this.#readFloat(buffer)

    this.tireSlipRatioFrontLeft = this.#readFloat(buffer)
    this.tireSlipRatioFrontRight = this.#readFloat(buffer)
    this.tireSlipRatioRearLeft = this.#readFloat(buffer)
    this.tireSlipRatioRearRight = this.#readFloat(buffer)

    this.wheelRotationSpeedFrontLeft = this.#readFloat(buffer)
    this.wheelRotationSpeedFrontRight = this.#readFloat(buffer)
    this.wheelRotationSpeedRearLeft = this.#readFloat(buffer)
    this.wheelRotationSpeedRearRight = this.#readFloat(buffer)

    this.wheelOnRumbleStripFrontLeft = this.#readInt(buffer)
    this.wheelOnRumbleStripFrontRight = this.#readInt(buffer)
    this.wheelOnRumbleStripRearLeft = this.#readInt(buffer)
    this.wheelOnRumbleStripRearRight = this.#readInt(buffer)

    this.wheelInPuddleDepthFrontLeft = this.#readFloat(buffer)
    this.wheelInPuddleDepthFrontRight = this.#readFloat(buffer)
    this.wheelInPuddleDepthRearLeft = this.#readFloat(buffer)
    this.wheelInPuddleDepthRearRight = this.#readFloat(buffer)

    this.surfaceRumbleFrontLeft = this.#readFloat(buffer)
    this.surfaceRumbleFrontRight = this.#readFloat(buffer)
    this.surfaceRumbleRearLeft = this.#readFloat(buffer)
    this.surfaceRumbleRearRight = this.#readFloat(buffer)

    this.tireSlipAngleFrontLeft = this.#readFloat(buffer)
    this.tireSlipAngleFrontRight = this.#readFloat(buffer)
    this.tireSlipAngleRearLeft = this.#readFloat(buffer)
    this.tireSlipAngleRearRight = this.#readFloat(buffer)

    this.tireCombinedSlipFrontLeft = this.#readFloat(buffer)
    this.tireCombinedSlipFrontRight = this.#readFloat(buffer)
    this.tireCombinedSlipRearLeft = this.#readFloat(buffer)
    this.tireCombinedSlipRearRight = this.#readFloat(buffer)

    this.suspensionTravelMetersFrontLeft = this.#readFloat(buffer)
    this.suspensionTravelMetersFrontRight = this.#readFloat(buffer)
    this.suspensionTravelMetersRearLeft = this.#readFloat(buffer)
    this.suspensionTravelMetersRearRight = this.#readFloat(buffer)

    this.carOrdinal = this.#readInt(buffer)

    this.carClass = this.#readInt(buffer)

    this.carPerfIndex = this.#readInt(buffer)

    this.driveTrainType = this.#readInt(buffer)

    this.numCylinders = this.#readInt(buffer)

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
      angularVelocity: ${JSON.stringify(this.angularVelocity, undefined, 2)},
      yaw: ${this.yaw},
      pitch: ${this.pitch},
      roll: ${this.roll}
    }`
  }
};

module.exports = { Sled }