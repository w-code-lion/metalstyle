  $("#myform").validate({
  rules: {
    email: {
      required:true,
      minlength: 5
    },
    name: {
      required:true,
      minlength: 3
    },
    text: {
      required:true,
      minlength: 10
    }
  }
});