const MissionCommander = require('../App/missionCommander');

describe("Unit Tests for Mission Commander class", () => {
    test('1) Create a mision commander objet', () => {
      const Carlo = new MissionCommander("Carlo")
      expect(Carlo.name).toBe("Carlo");
    });
  })

describe("Unit Tests for Mission Commander class", () => {
    test('2) Create a second mision commander objet', () => {
      const Fernanda = new MissionCommander("Fernanda")
      expect(Fernanda.name).toBe("Fernanda");
    });
  })

describe("Unit Tests for Mission Commander class", () => {
    test('3) Create a third mision commander objet', () => {
      const Rodrigo = new MissionCommander("Rodrigo")
      expect(Rodrigo.name).toBe("Rodrigo");
    });
  })