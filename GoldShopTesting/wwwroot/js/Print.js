function Print()
{
    $(".hideOnPrint").hide();
    window.print();
    $(".hideOnPrint").show();
}