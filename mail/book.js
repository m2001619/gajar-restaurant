$(function () {
  $("#bookForm input, #bookForm select").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      const name = $("input#book-name").val();
      const email = $("input#book-email").val();
      const phone = $("input#book-phone").val();
      const date = $("input#book-date").val();
      const time = $("input#book-time").val();
      const guest = $("select#book-guest").val();

      $this = $("#bookButton");
      $this.prop("disabled", true);

      $.ajax({
        url: "book.php",
        type: "POST",
        data: {
          name,
          email,
          phone,
          date,
          time,
          guest,
        },
        cache: false,
        success: function () {
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-success").append(
            "<strong>You Have Booked Table Successfully</strong>"
          );
          $("#success > .alert-success").append("</div>");
          $("#bookForm").trigger("reset");
        },
        error: function () {
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-danger").append(
              Swal.fire({
                  title: 'Rezervasyonunuz Başarıyla Alındı',
                  text: 'Rezervasyonunuzun durumu hakkında size bir e-posta göndereceğiz',
                  icon: 'success',
                  confirmButtonText: 'Tamam'
              })
          );
          $("#bookForm").trigger("reset")
          $("#success > .alert-danger").append("</div>");
          $("#bookForm").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  //Swal.fire('Success', 'You have booked table successfully', 'success')
});
