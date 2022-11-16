export const getWorkDay = (index) =>{
    if( index >=5 ) return "1";
    if( index < 0 ) return "-1";
    const workday = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday"
    ];
    return workday[index];
}