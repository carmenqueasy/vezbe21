// Random Email function is the function for random email
export const randomEmail = () => {
    return (
        Math.random()
          .toString(36)
          .substr(2, 7) + '@vivifyacademy.com'
      );
}
//random string kome se doda @.... i dobijemo neki generiski mail

export const randomTitle = () => {
    return (
        Math.random()
          .toString(36)
          .substr(2, 7)
      );
}

export const randomDescription = () => {
    return (
        Math.random()
            .toString(36)
            .substr(0, 36)
    );
}

export const randomFirstN = () => {
    return (

        Math.random().toString(36).substr(0, 36)
       
    );
}

export const randomLastN = () => {
    return (
        Math.random().toString(36).substr(0, 36)
    );
}