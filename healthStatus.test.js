import { healthStatus } from './healthStatus';

describe('healthStatus', () => {
  test('Должен вернуть значение "healthy" если здоровье более 50', () => {
    const character = { health: 90 };
    expect(healthStatus(character)).toBe('healthy');
  });

  test('Должен вернуть значение "wounded" если здоровье между 15 и 50', () => {
    const character = { health: 30 };
    expect(healthStatus(character)).toBe('wounded');
  });

  test('Должен вернуть значение "critical" если здоровье менее 15', () => {
    const character = { health: 10 };
    expect(healthStatus(character)).toBe('critical');
  });
});