class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(condition) {
      if (condition < 0) {
        this._state = 0;
      } else if (condition > 100) {
        this._state = 100;
      }
      else {
        this._state = condition;
      }
    }
  
    get state() {
      return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount)
        this.type = "magazine";  
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount)
        this.type = "book"; 
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "novel"; 
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "detective"; 
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "fantastic"; 
    }
}

class Library {
    constructor(name) {
        this.name = name;    
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
          this.books.push(book);
        } else {
          console.log('Мы не принимаем книги в таком плохом состоянии');
        }
    }
    
    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++) {
        for (let key in this.books[i]) {
          if (key === type && this.books[i][key] === value) {
            return(this.books[i]);
          }
        }
      }
      return (null);
    }
    
    giveBookByName(bookName) {
      for (const key in this.books) {
        if ((this.books[key].name) == bookName) {
          const givedBook = this.books[key];
          this.books.splice(key, 1);
          return givedBook;
        }
      }
      return (null);
    }
}

// Задача 3
class Student {
  constructor(name) {
    this.name = name;
    this.disciplines = {};
  }

  addGrade(grade, discipline) {
    if (grade > 0 && grade < 6) {
      if (this.disciplines[discipline] === undefined) {
        this.disciplines[discipline] = [];
        this.disciplines[discipline].push(grade);
        return;
      } else {
        this.disciplines[discipline].push(grade);
      }
    }
    else {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
      return;
    }
  }

  getAverageBySubject(discipline) {
    if (this.disciplines[discipline] === undefined) {
      console.log(`Несуществующий предмет ${discipline}`);
      return;
    } else {
      let sum = 0;
      for (let i = 0; i < this.disciplines[discipline].length; i++) {
        sum += this.disciplines[discipline][i];
      }
      // console.log(`Средний балл по предмету ${discipline} = ${sum / this.disciplines[discipline].length}`);
      return(sum / this.disciplines[discipline].length);
    }
  }

  getAverage() {
    let sum = 0;
    let num = 0;
    for (let j in this.disciplines) {
      for (let i = 0; i < this.disciplines[j].length; i++) {
        sum += this.disciplines[j][i];
        num++;
      }
    }
    // console.log(`Средний балл по всем предметам = ${sum / num}`);
    return(sum / num);
  }

  exclude(reason) {
    delete this.disciplines;
    this.excluded = reason;
    console.log(reason);
  }
}