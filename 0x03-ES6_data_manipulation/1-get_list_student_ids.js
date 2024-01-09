export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((arr_) => arr_.id);
  }
  return [];
}
