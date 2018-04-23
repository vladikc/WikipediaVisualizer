const students = [
  {name: "Felix", score: 85},
  {name: "Garfield", score: 98},
  {name: "Tom", score: 40}
]

class FinalExam{
  constructor(students){
    this.students = students
    this.extra = this.giveExtraCredit()
    this.passers = this.getPassers()
    this.average = this.getAverage()
  }
  giveExtraCredit(){
    return this.students.map(function(stud){
      return stud.score + 15
    })
  }

  getPassers(){
    return this.students.filter((stu)=>{
      return ((stu.score + 15) > 59)? true : false
    })
  }

  getAverage(){
    return this.extra.reduce((acc, curr, index)=>{
      return (index === this.extra.length - 1) ? ((acc + curr)/(index+1)): acc + curr
    }, 0)
  }
}

const final = new FinalExam(students)
console.log(final.extra)
console.log(final.passers)
console.log(final.average)