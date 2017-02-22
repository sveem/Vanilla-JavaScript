/*
 * You are given a JSON string containing an array of Students (Objects). 
 * Your task is to scale their scores upwards by increasing them with 10%. 
 * After that you should add a field that shows whether the student has passed or failed
 * the exam (passed exam means 100 or more points at the exam). 
 * Finally you should filter out only the students that have passed the exam and print them out sorted alphabetically.
 */

 let input = [
   {
     'name': 'Пешо',
     'score': 91
   },
   {
     'name': 'Лилия',
     'score': 290
   },
   {
     'name': 'Алекс',
     'score': 343
   },
   {
     'name': 'Габриела',
     'score': 400
   },
   {
     'name': 'Жичка',
     'score': 70
   },
 ];

 const courseGradeScaling = (array) => {
   let result = array
    .map((el) => {
      el.score += (el.score / 10 );
      el.score > 100 ? el.hasPassed = true : el.hasPassed = false;
      return el;
    })
    .filter(el => el.hasPassed)
    .sort((a, b) => a.name > b.name);
   return result;
 };

 console.log(courseGradeScaling(input));