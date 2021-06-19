function parseCount(value) {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");;
  };
  return parsed;
}

function validateCount(value) {
  try {
    return (parseCount(value));
  }
  catch (e) {
    return (e);
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((this.a + this.b <= this.c) || (this.a + this.c <= this.b) || (this.c + this.b <= this.a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return (this.a + this.b + this.c);
  }

  getArea() {
    const p = (this.getPerimeter() / 2);
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +s.toFixed(3);
  }
}

function getTriangle(aa, bb, cc) {
  try {
    return new Triangle(aa, bb, cc);
  }
  catch (e) {
    return {
      getPerimeter: function() {
        return "Ошибка! Треугольник не существует";
      },
      getArea: function() {
        return "Ошибка! Треугольник не существует";
      },
    }
  }
}