class Student extends Person {
    /*
    *   Class Constructor
    *
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification)
        this.scores = scores
    }


    /*
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let len = this.scores.length
        let sum = 0
        for(let i = 0; i < len; i++){
           sum += this.scores[i]
        }
        let res = sum/len
        if(res>=90 && res <=100){
            return 'O'
        }else if(res>=80 && res<90){
            return 'E'
        }else if(res>=70 && res<80){
            return 'A'
        }else if(res>=55 && res<70){
            return 'P'
        }else if(res>=40 && res<55){
            return 'D'
        }else{
            return 'T'
        }

    }

}
