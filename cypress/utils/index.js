// Random Email function is the function for random email
export const randomEmail = () => {
    return (
        Math.random()
          .toString(36)
          .substr(2, 7) + '@vivifyacademy.com'
      );
}
//random string kome se doda @.... i dobijemo neki generiski mail