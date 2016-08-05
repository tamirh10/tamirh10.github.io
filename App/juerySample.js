

$(document).ready(function ($) {
    var list_target_id = 'list-target'; //first select list ID
    var list_select_id = 'list-select'; //second select list ID
    var initial_target_html = '<option value="">Please select a colour...</option>'; //Initial prompt for target select

    $('#' + list_target_id).html(initial_target_html); //Give the target select the prompt option

    $('#' + list_select_id).change(function (e) {
        //Grab the chosen value on first select list change
        var selectvalue = $(this).val();

        //Display 'loading' status in the target select list
        $('#' + list_target_id).html('<option value="">Loading...</option>');

        if (selectvalue == "") {
            //Display initial prompt in target select if blank value selected
            $('#' + list_target_id).html(initial_target_html);
        } else {
            //Make AJAX request, using the selected value as the GET
            $.ajax({
                url: 'http://localhost:3000/angular-webapi/api/' + selectvalue,
                success: function (output) {
                    //alert(output[0].Name);
                    $.each(output , function(value, key) {
                    $('#' + list_target_id).html(output.Name).append($("<option></option>")
                            .attr("value", '').text(key.Name));;
                  
                    });
                    
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    //alert(output);
                }
            });
        }
    });
});