/*
 * Write a JS function that displays information about the currently playing musical track.
 * The input comes as an array of string elements. 
 * The first element is the name of the track, the second is the name of
 * the artist performing and the third is the duration in minutes and seconds.
 * The output should be printed to the console in the following format:
 * Now Playing: {artist name} - {track name} [{duration}]
 */

let input = ['Number One', 'Nelly', '4:09'];

const playlist = (array) => {
  let song = array[0];
  let artist = array[1];
  let length = array[2];

  return `Now Playing: ${artist} - ${song} [${length}]`;

};


console.log(playlist(input));