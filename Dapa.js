var tool_id=$('input[name="tool_id"]').val();var parent_id=$('input[name="parent_id"]').val();var is_web_premium=0;var is_prod=0;var captcharesponse="";var base_url=window.location.origin;var csrfToken=$('meta[name="csrf-token"]').attr('content');var exclude_url=0;var exclude_domain=0;var url_length=0;var textarea='';var links='';var linksText='';var code='';var ads1='';var ads2='';var html1='';var html2='';var filter_data_arr=[];$(document).ready(function(){is_prod=$('input[name="is_prod"]').val();is_web_premium=$('input[name="is_web_premium"]').val();$.ajaxSetup({headers:{"X-CSRF-TOKEN":csrfToken},});countwebs();applyShadowRoot();});$(window).on('load',function(){countwebs();});$(document).on('click','#switch_mode',function(){document.cookie="mode=pro";window.location.reload();});$("#reportDownload").on("click",function(){var data_bak=$('#data_arr').val();$('#data_arr').val(JSON.stringify(filter_data_arr));$('#ExportExcelForm').submit();$('#data_arr').val(data_bak);});$('#remove_data').on("click",function(){request_ahref_data=0;$("#urls").val('');$('.result_table').html('');$("#result_dapa").hide();countwebs();});$('#paste_urls').on('click',function(event){navigator.clipboard.readText().then(function(text){$('#urls').val(text);countwebs();}).catch(function(err){console.error('Failed to read clipboard contents: ',err);});});$("#loadSample").on("click",function(){var sample=`Here is a sample of Raw data, our tool will automatically extract urls from this data and check DA PA.
Hi Support team
i have high Authority sites for guest posts. Check list below.
https://techninjapro.com
https://daqiantimes.com
labnol.org
www.architecturelist.com
https://www.musiccrowns.org`;$("#urls").val(sample);countwebs();});$("#urls").on("change blur keyup paste input DOMSubtreeModified",function(){countwebs();});function isJSON(str){try{JSON.parse(str);return true;}catch(e){return false;}}
function change_url(){var lang=document.getElementById("lang").value;location=base_url+lang;}
function doRequestUR(){links=text_to_url_array();linksText=links.join("\n");$("#urls").val(linksText);countwebs();}
function text_to_url_array(){textarea=$("#urls").val();var urls_matched=textarea.match(/(?:https?:\/\/)?(?:www\.)?([a-z0-9-]+\.)*(?:[a-z0-9-]+\.[a-z]{2,})(?:\/[^"\s]*)?/gi);urls_matched=urls_matched.join('\n');urls_matched=urls_matched.replace(/,/g,'\n');return urls_matched.split('\n');}
function limit_urls(){var urlArray=text_to_url_array();urlArray.length=allowed_urls_count;$('#urls').val(urlArray.join('\n'));return true;}
function countwebs(){var textarea=$("#urls").val();textarea.trim();if(textarea.length){$('.total__websites').show();$('#remove_data').attr('style','visibility:visible');$('#editor_btns_container').attr('style','display:none !important');}else{$('.total__websites').hide();$('#remove_data').attr('style','visibility:hidden');$('#editor_btns_container').attr('style','display:flex !important');}
var links=textarea.split("\n");var urlls=0;$.each(links,function(index,val){if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(val)){urlls++;}});$("#totwebs").text(urlls);return urlls;}
function alert_box(e,t){$("#model-box .model-heading").text(e),$(".model-bg").fadeIn(300),$("#model-box").fadeIn(300),$("#model-box .model-body").html(t);}
function close_model(){document.getElementById("model-bg").style.display="none";document.getElementById("model-box").style.display="none";}
function is_url_valid(urls){if(urls&&!urls.match(/^http([s]?):\/\/.*/)){alert_box("Error","Please Enter Url As(https:\\dapachecker.org)");return false;}
return true;}
function check_url_count(){var total_urls=countwebs();url_length=$("#totwebs").text()?$("#totwebs").text():total_urls;if(url_length>allowed_urls_count){if(is_web_premium=="0")
limit_modal();else{alert_box("Limit Exceeds","Urls After First "+allowed_urls_count+" will be automatically excluded");setTimeout(()=>{close_model();},2500);return limit_urls();}
return false;}
if(url_length==0){alert_box("Error","Enter Valid URL");return false;}
return true;}
function validate_data(){exclude_url=0;if($("#exclude_url").prop("checked")==true){exclude_url=1;}
exclude_domain=0;if($("#exclude_domain").prop("checked")==true){exclude_domain=1;}
if(!check_url_count()){return false;}
doRequestUR();return true;}
function scrollToTop(){window.scrollTo(0,0);}
$(document).click(function(event){var container=$(".child_menu");var container1=$(".parent_menu");if(container&&container1){if(!container.is(event.target)&&!container1.is(event.target)&&!container.has(event.target).length&&!container1.has(event.target).length){container1.removeClass('active');}}});$(".parent_menu").on('click',function(){$('.parent_menu').not(this).removeClass('active');$(this).toggleClass('active');})
function get_ad_html(id_index,is_mobile=false){if(is_web_premium=='0'){if(is_mobile){return '<div  class="resutl_bottom_ad_mbl text-center ads__main" style="text-align:center;margin:5px 0px"><label for="">Advertisement</label><div class="text-center pb-1 my-3 mt-4 bordered_tools" id="mth-mbl-result-tool_bottom_'+
id_index+
'" style="width:300px;max-width:99%;min-height:50px !important;margin:0px auto !important;"></div></div>';}
return '<div  class="resutl_bottom_ad_desk text-center ads__main" style="text-align:center;margin:5px 0px"><label for="">Advertisement</label><div class="text-center pb-1 my-3 mt-4 result_mbl bordered_tools" id="mth-result-tool_bottom_'+
id_index+
'" style="width:728px;max-width:99%;min-height:90px !important;margin:0px auto;"></div></div>';}
return '';}
function appendResult(){var elm=document.getElementById("example");elm.innerHTML=html1;elm.parentNode.insertAdjacentHTML("afterend",ads1);var elm2=document.getElementById("mbl_result");elm2.innerHTML=html2?html2:html1;elm2.parentNode.insertAdjacentHTML("afterend",ads2);}
$(".toc a").click(function(){$(".toc a").removeClass("active");$(this).addClass("active");});$('.alert-dismissible .close').click(function(){$(this).parent().remove();});$('.content_box p').each(function(){if($(this).find('img').length){$($(this).find('img')).wrap("<div class='content_image'></div>");}});$(document).on('click','.btnLogin',function(){loginModal();});function loginModal(){close_all_modals();$('.errors').html('');$('.success').html('');$(".model-bg").fadeOut(150);$('#signup-modal').fadeOut(150,function(){$(".model-bg").fadeToggle(150);$('#login-modal').fadeToggle(150);});}
$(document).on('click','#btnSignUp',function(e){e.preventDefault();signUpModal();});function signUpModal(){$('.errors').html('');$('.success').html('');$(".model-bg").fadeOut(150);$('#login-modal').fadeOut(150,function(){$(".model-bg").fadeToggle(150);$('#signup-modal').fadeToggle(150);});}
function close_login_signup_modal(){$('.model-bg').fadeOut(150);$('.login-signup-box').fadeOut(150);}
$(document).on('click','.btnForgetPassword',function(){forgetPasswordModal();});function forgetPasswordModal(){$('.errors').html('');$('.success').html('');$(".model-bg").fadeOut(150);$('#login-modal').fadeOut(150,function(){$(".model-bg").fadeToggle(150);$('#forget-password-modal').fadeToggle(150);});}
$(document).on('click','.btnResetPassword',function(){resetPasswordModal();});function resetPasswordModal(){$('.errors').html('');$('.success').html('');$(".model-bg").fadeToggle(150);$('#reset-password-modal').fadeToggle(150);}
$(document).on('click','.accordion>.heading',function(){var $accordionItem=$(this).parent();var $accordionContent=$(this).next('.description');if($accordionItem.hasClass('active')){$accordionContent.slideUp(400,function(){$accordionItem.removeClass('active');});}else{$accordionContent.slideDown(400,function(){$accordionItem.addClass('active');});}});$(document).on('click','.account__tab',function(){if(!$(this).hasClass('disabled')){$('.account__tab').removeClass('active');$('.account__tab__content').removeClass('active');$('#account__tab__content__'+($(this).attr('data-tab'))).toggleClass('active');$(this).toggleClass('active');}});function limit_modal(){$(".model-bg").fadeToggle(300);$('#limit-modal').fadeToggle(300);}
$(function(){var is_request_process=false;var is_error=false;$(document).on('click','#btn_login',function(e){e.preventDefault();$('.errors').html('');if(is_request_process)
return false;var email=$('#login_form input[name="email"]').val();var password=$('#login_form input[name="password"]').val();var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!emailPattern.test(email)){$('.error-email').text('Invalid email');is_error=true;}
if($.trim(password).length<8){$('.error-password').text('The new password must be at least 8 characters.');is_error=true;}
if(!is_error){$('#login-modal').find('.loader').css('display','flex');is_request_process=true;$.ajax({url:$('#login_form').attr("action"),data:{'email':email,'password':password,},method:"POST",success:function(response){if(response.status){window.location.href=base_url;}else{if(response&&typeof response.errors==="object"){$.each(response.errors,function(index,data){$('.error-'+index).text(data);});}
else{$('.error-gen').text(response.mess);}}},error:function(error){console.log(error);alert_box('Error','Something went wrong!');},complete:function(){is_request_process=false;is_error=false;$('#login-modal').find('.loader').hide();}});}
setTimeout(function(){$('.errors').html('');$('.success').html('');is_error=false;},5000);});});$(function(){var is_request_process=false;var is_error=false;$(document).on('submit','#signup_form',function(e){e.preventDefault();if(is_request_process)
return false;var name=$('#signup_form input[name="name"]').val();var email=$('#signup_form input[name="email"]').val();var password=$('#signup_form input[name="password"]').val();var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if($.trim(name).length<1){$('.error-name').text('The name cannot be empty.');is_error=true;}
if($.trim(email).length<1){$('.error-email').text('The email cannot be empty.');is_error=true;}
else if(!emailPattern.test(email)){$('.error-email').text('Invalid email');is_error=true;}
if($.trim(password).length==0){$('.error-password').text('The new password cannot be empty.');is_error=true;}
else if($.trim(password).length<8){$('.error-password').text('The password must be at least 8 characters.');is_error=true;}
if(!is_error){is_request_process=true;$('#signup-modal').find('.loader').css('display','flex');$.ajax({url:$(this).attr("action"),data:{'name':name,'email':email,'password':password,},method:"POST",success:function(response){if(response.status){window.location.href=base_url;}else{if(response&&typeof response.errors==="object"){$.each(response.errors,function(index,data){$('.error-'+index).text(data);});}
else{$('.error-gen').text(response.mess);}}},error:function(error){console.log(error);alert_box('Error','Something went wrong!');},complete:function(){is_request_process=false;is_error=false;$('#signup-modal').find('.loader').hide();}});}
setTimeout(function(){$('.errors').html('');$('.success').html('');is_error=false;},5000);});});$(function(){var is_request_process=false;var is_error=false;$(document).on('submit','#forget_password_form',function(e){e.preventDefault();if(is_request_process)
return false;var email=$('#forget_password_form input[name="email"]').val();var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if($.trim(email).length<1){$('.error-email').text('The email cannot be empty.');is_error=true;}
else if(!emailPattern.test(email)){$('.error-email').text('Invalid email');is_error=true;}
if(!is_error){$('#forget-password-modal').find('.loader').css('display','flex');is_request_process=true;$.ajax({url:$(this).attr("action"),data:{'email':email,},method:"POST",success:function(response){if(response.status){$('.success').text(response.mess);}else{if(response&&typeof response.errors==="object"){$.each(response.errors,function(index,data){$('.error-'+index).text(data);});}
else{$('.error-gen').text(response.mess);}}},error:function(error){console.log(error);alert_box('Error','Something went wrong!');},complete:function(){is_request_process=false;is_error=false;$('#forget-password-modal').find('.loader').hide();}});}
setTimeout(function(){$('.errors').html('');$('.success').html('');is_error=false;},5000);});});$(function(){var is_request_process=false;var is_error=false;$(document).on('submit','#reset_password_form',function(e){e.preventDefault();if(is_request_process)
return false;var new_password=$('#reset_password_form input[name="new_password"]').val();var confirm_password=$('#reset_password_form input[name="confirm_password"]').val();if($.trim(new_password).length<8){$('.error-gen').html('The new password must be at least 8 characters.');return false;}
if(new_password!=confirm_password){$('.error-gen').html('Password did not match');return false;}
if(!is_error){is_request_process=true;$.ajax({url:$(this).attr("action")+'/'+_token,data:{'password':new_password,},method:"POST",success:function(response){if(response.status){$('.success').text(response.mess);}else{if(response&&typeof response.errors==="object"){$.each(response.errors,function(index,data){$('.error-'+index).text(data);});}
else{$('.error-gen').text(response.mess);}}},error:function(error){console.log(error);alert_box('Error','Something went wrong!');},complete:function(){is_request_process=false;is_error=false;}});}
setTimeout(function(){$('.errors').html('');$('.success').html('');is_error=false;},5000);});});$('#btn_update_password').on('click',function(){var old_password=$('#old_password').val();var new_password=$('#new_password').val();var confirm_password=$('#confirm_password').val();if($.trim(new_password).length<8){$('#error_message').html('The new password must be at least 8 characters.');return false;}
if(new_password!=confirm_password){$('#error_message').html('Password did not match');return false;}
$('.errors').html('');$.ajax({url:base_url+"/update_password",data:{'old_password':old_password,'new_password':new_password,},method:"POST",success:function(response){if(response.status==200){$('#response_message').text(response.data);}else{if(response.status==400){$('#error_message').html('');var errors_list='<ul class="clr-red">';$.each(response.data.errors,function(key,item){console.log(key,item);errors_list+='<li>'+item[0]+'</li>';});errors_list+='</ul>';$('#error_message').append(errors_list);}else if(response.status==422){$('#error_message').text(response.data);}else if(response.status==401){$('#error_message').text(response.data);}else{alert_box('Error','Something went wrong!');}}},error:function(error){console.log(error);alert_box('Error','Something went wrong!');},complete:function(){setTimeout(function(){$('.errors').html('');},5000);}});});$('#btn_delete_account').on('click',function(){if(confirm('Are you sure you want to delete this account?')){$.ajax({url:$(this).attr('data-delete-account-url'),method:"POST",success:function(response){console.log(response);if(response.status){alert_box('Success',response.mess);setTimeout(()=>{window.location.href=base_url;},2000);}else{alert_box('Error','Something went wrong!');}},error:function(error){console.log(error);alert_box('Error','Something went wrong!');},complete:function(){setTimeout(function(){$('.errors').html('');},5000);}});}});function redirectToPremium(){window.location.href=base_url+'/pricing';}
$('.range-slider').on('input',function(){const daFilterValue=parseInt($('#da_filter').val());const spamScoreFilterValue=parseInt($('#ss_filter').val());const data_arr=JSON.parse($('#data_arr').val());filter_data_arr=[];const range=$(this);const index=$('.range-slider').index(this);const percent=(range.val()-range.attr('min'))/(range.attr('max')-range.attr('min'))*100;range.css('background',`linear-gradient(to right, #d4403a 0%, #d4403a ${percent}%, #acacac ${percent}%, #acacac 100%)`);$('.filter_value').eq(index).text(range.val());$('.result_table').each(function(){if($(this).is(':visible')){$(this).find('tbody tr').each(function(index,element){const daValue=parseInt($(element).find('.da_data').text());const spamScoreValue=parseInt($(element).find('.spam_score_data').text());if(daValue>daFilterValue&&spamScoreValue<spamScoreFilterValue){$(element).show();}else{$(element).hide();}
if(data_arr[index].site_da>daFilterValue&&data_arr[index].spam_score<spamScoreFilterValue){filter_data_arr.push(data_arr[index]);}});}});});$('.openbtn').on('click',function(){$("#myNav").toggleClass("open closed");});$('#mbl_btn_other_tools').on('click',function(){$('.other__tools__list').toggleClass('show');});function close_all_modals(){if($('#ad-blocker-model-box').is(':hidden')){$('.ratings_container').css({'display':'flex','left':0});$('.feedback_form_container').css({'display':'none','left':'200%'});$('.feedback__model').fadeOut(0);$('.login-signup-box').fadeOut(0);$(".model-bg").fadeOut(0);$('#limit-modal').fadeOut(0);$("#model-bg").hide();$("#model-box").hide();$(".model-box").hide();$("#forget-password-modal").hide();}}
document.addEventListener("keydown",function(event){if(event.key==="Escape"||event.keyCode===27){close_all_modals();}});$(document).on('click','.model-bg',function(){close_all_modals();});function applyShadowRoot(){var is_request_processing=false;var params={};const btn_submit_title=$('input[name="btn_submit_title"]').val();const container=document.getElementById('tool_btn_container');if(container==null)
return false;params.validate_data=container.getAttribute('data-validate')?JSON.parse(container.getAttribute('data-validate')):true;const button=document.createElement('div');const buttonInnerContent=document.createElement('a');const buttonInnerSpan=document.createElement('span');const buttonInnerImg=document.createElement('img');button.className='btn btn-primary btn-lg';buttonInnerImg.src=base_url+'/web_assets/frontend/images/icons/arrow-spinner.svg';buttonInnerImg.style='display:none';buttonInnerSpan.textContent=btn_submit_title;buttonInnerContent.appendChild(buttonInnerImg);buttonInnerContent.appendChild(buttonInnerSpan);button.appendChild(buttonInnerContent);const shadowRoot=container.attachShadow({mode:'closed'});const buttonStyle=document.createElement('style');buttonStyle.textContent=`
    .btn {
        height: fit-content;
        cursor: pointer;
        min-width: max-content;
        border-radius: var(--border-radius-extralarge);
        font-size: var(--font-size-small);
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: center;
    }
    .btn a {
        color: var(--color-white) !important;
        display: flex;
        gap: 5px;
        padding: 10px 15px;
        align-items: center;
    }
    .btn a img {
        width: 15px;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
    }
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .btn.btn-lg a {
        padding: 15px 20px;
    }
    .btn-primary {
        border: 1px solid var(--color-primary) !important;
        background-color: var(--color-primary);
        color: var(--color-white);
    }
    .btn-primary:hover {
        border: 1px solid var(--color-primary) !important;
        background-color: var(--color-white);
        color: var(--color-primary);
    }
    .btn-primary:hover a {
        color: var(--color-primary) !important;
    }
    .btn-primary:hover img{
        filter:var(--filter-primary);
    }
    `;shadowRoot.innerHTML="";shadowRoot.appendChild(buttonStyle);shadowRoot.appendChild(button);button.addEventListener('click',(event)=>{if(params.validate_data)
validateData(event);else{var $this=event.currentTarget;$($this).attr("disabled","disabled");$($this).find('a span').text("Generating...");$($this).find('a img').show();getToolResponse((response)=>{$($this).removeAttr("disabled");$($this).find('a span').text(btn_submit_title);$($this).find('a img').hide();is_request_processing=false;});}});function validateData(event){if(is_request_processing)
return false;if(!validate_data()){return;}
is_request_processing=true;var tool_response=false;var $this=event.currentTarget;code=$("#code").val();$($this).attr("disabled","disabled");$($this).find('a span').text("Checking...");$($this).find('a img').show();if((exclude_url==1)||(exclude_domain==1)){$.ajax({url:base_url+"/checkDaPaUrls",data:{'links':links,'url':exclude_url,'domain':exclude_domain},method:"POST",success:function(response){$("#urls").val(response);doRequestUR();getToolResponse((response)=>{$($this).removeAttr("disabled");$($this).find('a span').text(btn_submit_title);$($this).find('a img').hide();is_request_processing=false;});}});}else{doRequestUR();getToolResponse((response)=>{$($this).removeAttr("disabled");$($this).find('a span').text(btn_submit_title);$($this).find('a img').hide();is_request_processing=false;});}}}
$("#btn_upload_file").on("click",function(){$("#file-input").click();});$("#file-input").on("change",function(e){var file=e.target.files[0];var file_ext=file.name.split(".").pop();var is_valid=is_valid_file(file);if(!is_valid){$("#file-input").val(null);return;}
var reader=new FileReader();reader.onload=function(e){var result="";if(file_ext=="txt"||file_ext=="csv"){result=e.target.result;$("#urls").val(result.trim()).change();}else{alert_box("Only txt and csv files are allowed.");}};reader.readAsText(file);$("#file-input").val(null);});function is_valid_file(file){var file_size=get_file_size_in_mb(file.size);var file_ext=file.name.split(".").pop();if(!file){alert_box("No file selected.");return false;}else if(file.size==0){alert_box("Selected file size is 0.");return false;}else if(file_size>2){alert_box("Only 2 Mb file is allowed. Current file size is "+
file_size+
" Mb");return false;}
if(file_ext!="csv"&&file_ext!="txt"){alert_box("Only txt and csv files are allowed.");return false;}
return true;}
function get_file_size_in_mb(size){var mb=size/1024/1024;return mb.toFixed(2);}
$('.toggle-switch input').on('change',function(){var index=$('.toggle-switch input').index(this);if($(this).prop("checked")){$('.label-on').eq(index).css('color','#acacac');$('.label-off').eq(index).css('color','#d4403a');}else{$('.label-on').eq(index).css('color','#000');$('.label-off').eq(index).css('color','#acacac');}});function handle_error(response){if(response.responseJSON)
response=response.responseJSON;if(response.is_user_premium!=undefined&&response.is_user_premium!=parseInt(is_web_premium)){alert_box("Error",response.message);document.cookie="mode=classic";setTimeout(()=>{window.location.reload();},3000);return false;}
if(response.status!=200){if(response.message)
alert_box("Error",response.message);else
alert_box("Error","Something went Wrong ! Please try again");}
return true;}