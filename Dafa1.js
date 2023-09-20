var remaining_domains_href=[];var retry_count=0;const _token=getParameterByName('token');$(document).ready(function(){if(_token){const newUrl=window.location.href.replace(`?token=${_token}`,'');window.history.replaceState({},document.title,newUrl);resetPasswordModal();}
$('.range-slider').trigger('change');var queryString=new URLSearchParams(window.location.search);if(queryString.has('url')){var urlValue=queryString.get('url');$("#urls").val(urlValue);countwebs();console.log('URL value:',urlValue);}});function getParameterByName(name){const urlParams=new URLSearchParams(window.location.search);return urlParams.get(name);}
function getToolResponse(callback){request_ahref_data=0;document.getElementById("example").innerHTML="";$(".resutl_bottom_ad_mbl").remove();$(".resutl_bottom_ad_desk").remove();$("#result_dapa").hide();$('#feedback_container').removeClass('flex');setTimeout(()=>{$.ajax({url:base_url+"/checkDA_new",data:{tool_id:tool_id,parent_id:parent_id,links:links,url:exclude_url,domain:exclude_domain,code:code,tool_id:tool_id,parent_id:parent_id},method:"POST",success:function(response){if(!handle_error(response)){callback(false);}
else{var data=response.data;var k;var form_data="";ads1=ads2='';if(is_web_premium=='1'){html1="<thead><tr><th>Sr. No</th><th>Web Page</th><th title='Domain Authority'>DA</th><th class='ahref_head'>DR</th><th class='ahref_head'>UR</th><th title='Page Authority'>PA</th><th title='Spam Score'>SS</th><th  title='Domain Age'>Age</th><th title='Moz Rank'>MR</th><th>IP Address</th><th>Pages in Google</th></tr></thead><tbody>";html2="<thead><tr><th>Web Page</th><th>DA</th><th class='ahref_head'>DR</th><th class='ahref_head'>UR</th><th>PA</th><th>SS</th><th>Age</th><th>MR</th><th>IP</th></tr></thead>";}else{html1="<thead><tr><th>Sr. No</th><th>Web Page</th><th>Domain Authority</th><th class='ahref_head'>DR</th><th class='ahref_head'>UR</th><th>Page Authority</th><th>Spam Score</th><th>Moz Rank</th><th>Pages in Google</th></tr></thead><tbody>";html2="<thead><tr><th>Web Page</th><th>DA</th><th class='ahref_head'>DR</th><th class='ahref_head'>UR</th><th>PA</th><th>SS</th><th>MR</th></tr></thead>";}
var ads_breaks=[4,9,14,19];var length=data.length;var parts;var domains_list=[];var loader="<img class='ahref_loader' width='32px' height='32px' src='"+base_url+'/web_assets/frontend/images/loader.gif'+"'/>";for(var i=0;i<length;i=i+1){k=i+1;domain=data[i].domain;domain_only=urlToDomain(domain);if(is_web_premium=='0'){if(i==0){domains_list.push(domain_only);}}
else
domains_list.push(domain_only);site_da=data[i].site_da;site_pa=data[i].site_pa;site_mr=data[i].site_mr;spam_score=data[i].spam_score;if(is_web_premium=='1'){ip_address=data[i].ip_address??null;domain_age=data[i].domain_age??'-';if(domain_age&&domain_age!="-"){parts=domain_age.split(', ');domain_age=parts[0]+', '+parts[1];}}else{ip_address='';domain_age='';}
loader_href=is_web_premium=='1'?loader:"<img src='"+base_url+"/web_assets/frontend/images/icons/star.svg'/><a href='"+base_url+"/pricing' class='premium'>Premium</span>";html1+="<tr data-domain='"+domain_only+"'><td># "+
k+
"</td><td><a href='https://"+
domain+
"' target='_blank'>"+
domain+
"</a></td><td  class='da_data'>"+
site_da+
"</td>"
+((i==0)?"<td class='dr_data premium_data_container'>"+loader+"</td><td class='ur_data premium_data_container'>"+loader+"</td>":"<td class='dr_data premium_data_container'>"+loader_href+"</td><td  class='ur_data premium_data_container'>"+loader_href+"</td>")+
"<td>"+site_pa+
"</td>"+
((spam_score=='premium')?"<td  class='premium_data_container'><img src='"+base_url+"/web_assets/frontend/images/icons/star.svg'/><a href='"+base_url+"/pricing' class='premium'>Premium</span>":("<td class='spam_score_data'>"+spam_score+
"%"))+"</td>"+
(is_web_premium=='1'?"<td>"+domain_age+"</td>":"")+
"<td>"+
site_mr+
"</td>"+
(is_web_premium=='1'?"<td>"+ip_address+"</td>":"")+
"<td><a target='_blank' href='https://www.google.com/search?q=site:"+
domain+
"'><span class='action'><img src='"+base_url+"/web_assets/frontend/images/icons/document.svg'/></span></a></td>"+
"</tr>";html2+="<tr data-domain='"+domain_only+"'><td><a href='https://"+
domain+
"' target='_blank'>"+
domain+
"</a></td><td class='da_data'>"+
site_da+
"</td>"
+((i==0)?"<td class='dr_data premium_data_container'>"+loader+"</td><td class='ur_data premium_data_container'>"+loader+"</td>":"<td class='dr_data premium_data_container'>"+loader_href+"</td><td  class='ur_data premium_data_container'>"+loader_href+"</td>")+
"<td>"+
site_pa+"</td>"+
((spam_score=='premium')?"<td  class='premium_data_container'><img src='"+base_url+"/web_assets/frontend/images/icons/star.svg'/><a href='"+base_url+"/pricing' class='premium'>Premium</span>":("<td class='spam_score_data'>"+spam_score+
"%"))+"</td>"+
(is_web_premium=='1'?"<td>"+domain_age+"</td>":"")+
"<td>"+
site_mr+
"</td>"+
(is_web_premium=='1'?"<td>"+ip_address+"</td>":"")+
"</tr>";if($.inArray(i,ads_breaks)!=-1&&(is_web_premium!='1')){html1+='<tr><td colspan="8"><div  class="text-center ads__main" style="text-align:center;margin:10px 0px"><label for="">Advertisement</label><div class="text-center pb-1 my-3 mt-4 result_mbl bordered_tools" id="mth-result-tool_bottom_'+
i+
'" style="width:728px;max-width:99%;min-height:90px !important;margin:0px auto;"></div></div></td></tr>';}
if($.inArray(i,ads_breaks)!=-1&&(is_web_premium!='1')){html2+='<tr><td colspan="8"><div  class="text-center ads__main" style="text-align:center;margin:10px 0px"><label for="">Advertisement</label><div class="text-center pb-1 my-3 mt-4 result_mbl bordered_tools" id="mth-result-tool_bottom_'+
i+
'" style="width:728px;max-width:99%;min-height:90px !important;margin:0px auto;"></div></div></td></tr>';}
form_data+='<input type="hidden" name="domain[]" value="'+
domain+
'"><input type="hidden" name="site_da[]" value="'+
site_da+
'"><input type="hidden" name="site_pa[]" value="'+
site_pa+
'"><input type="hidden" name="site_mr[]" value="'+
site_mr+
'"><input type="hidden" name="spam_score[]" value="'+
spam_score+
'">'+
(is_web_premium=='1'?'<input type="hidden" name="domain_age[]" value="'+domain_age+'"/>':'')+
(is_web_premium=='1'?'<input type="hidden" name="ip_address[]" value="'+ip_address+'"/>':'');(is_web_premium=='1'?"<td>"+domain_age+"</td>":"");}
if($.inArray(i,ads_breaks)!=-1&&(is_web_premium!='1')){html1+='<tr><td colspan="8"><div  class="text-center ads__main" style="text-align:center;margin:10px 0px"><label for="">Advertisement</label><div class="text-center pb-1 my-3 mt-4 result_mbl bordered_tools" id="mth-result-tool_bottom_'+
i+
'" style="width:728px;max-width:99%;min-height:90px !important;margin:0px auto;"></div></div></td></tr>';}
if($.inArray(i,ads_breaks)!=-1&&(is_web_premium!='1')){html2+='<tr><td colspan="8"><div  class="text-center ads__main" style="text-align:center;margin:10px 0px"><label for="">Advertisement</label><div class="text-center pb-1 my-3 mt-4 result_mbl bordered_tools" id="mth-result-tool_bottom_'+
i+
'" style="width:728px;max-width:99%;min-height:90px !important;margin:0px auto;"></div></div></td></tr>';}
html1+="</tbody>";$('#data_arr').val(JSON.stringify(data));filter_data_arr=data;appendResult();$("#result_dapa").show();$('#feedback_container').addClass('flex');$("html, body").animate({scrollTop:$("#result_dapa").offset().top-30},1000);if(is_web_premium=='0')
loadResultAd();callback(true);retry_count=0;remaining_domains_href=[];if(is_prod=='0'){request_ahref_data=1;fetchAhrefData(domains_list);}}},error:function(error){handle_error(error);callback(false);},complete:function(){}});},1000);}
function loadResultAd(){function load_ads(ads_ids){if(Array.isArray(ads_ids)){setTimeout(()=>{ads_ids.map((aid)=>{var ad=get_ads[aid];if(ad&&$("#"+ad[0]).length>0){$("#"+ad[0]).append(ad[1]);$("#"+ad[0]).removeClass("bordered_tools");}});var pagead2Script=document.createElement("script");pagead2Script.defer="true";pagead2Script.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";document.head.appendChild(pagead2Script);$("iframe").attr("title","Ads load by Google");},3000);}}
const get_Ad={_300x50:'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7155931151667823" crossorigin="anonymous"></script><ins class="adsbygoogle"style="display:inline-block;width:300px;height:50px"data-ad-client="ca-pub-7155931151667823"data-ad-slot="1006874695"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>',_728x90:'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7155931151667823" crossorigin="anonymous"></script><ins class="adsbygoogle"style="display:inline-block;width:728px;height:90px"data-ad-client="ca-pub-7155931151667823"data-ad-slot="4946119707"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>',};const get_ads={MTH_RESULT_CALC4:["mth-result-tool_bottom_4",get_Ad["_728x90"]],MTH_RESULT_CALC9:["mth-result-tool_bottom_9",get_Ad["_728x90"]],MTH_RESULT_CALC14:["mth-result-tool_bottom_14",get_Ad["_728x90"]],MTH_RESULT_CALC19:["mth-result-tool_bottom_19",get_Ad["_728x90"]],MTH_RESULT_BOT_CALC_5:["mth-result-tool_bottom_5",get_Ad["_728x90"]],MTH_MBL_RESULT_CALC4:["mth-mbl-result-tool_bottom_4",get_Ad["_300x50"]],MTH_MBL_RESULT_CALC9:["mth-mbl-result-tool_bottom_9",get_Ad["_300x50"]],MTH_MBL_RESULT_CALC14:["mth-mbl-result-tool_bottom_14",get_Ad["_300x50"]],MTH_MBL_RESULT_CALC19:["mth-mbl-result-tool_bottom_19",get_Ad["_300x50"]],MTH_MBL_RESULT_BOT_CALC_5:["mth-mbl-result-tool_bottom_5",get_Ad["_300x50"],],};if(is_prod=="1")
load_ads(["MTH_RESULT_CALC4","MTH_RESULT_CALC9","MTH_RESULT_CALC14","MTH_RESULT_CALC19","MTH_RESULT_BOT_CALC_5","MTH_MBL_RESULT_CALC4","MTH_MBL_RESULT_CALC9","MTH_MBL_RESULT_CALC14","MTH_MBL_RESULT_CALC19","MTH_MBL_RESULT_CALC5",]);}
function get_ahref_data(urls,callback){$.ajax({url:base_url+"/api/get_ahref_data",data:{url:urls},method:"POST",success:function(response){if(response){callback(response);}},error:function(error){callback(false);}});}
function fetchAhrefData(domains_list){var domains_list_str=domains_list.join();remaining_domains_href=[];get_ahref_data(domains_list_str,(response_data)=>{domains_list.forEach((domain,index)=>{var response=response_data.filter(function(obj){return obj.domain===domain;});if(!isEmpty(response)){response=response[0];var domainToMatch=response.domain;var $trElement=$('tr[data-domain="'+domainToMatch+'"]');var $tdDrElement=$trElement.find('td.dr_data');var $tdUrElement=$trElement.find('td.ur_data');$tdDrElement.text(response.dr);$tdUrElement.text(response.ur);var data_string=$('#data_arr').val();var data_arr=JSON.parse(data_string);var found_index=data_arr.findIndex(function(obj){return obj.domain===domainToMatch;});if(found_index!=-1){data_arr[found_index].dr=response.dr;data_arr[found_index].ur=response.ur;}
filter_data_arr=data_arr;$('#data_arr').val(JSON.stringify(data_arr));}else{remaining_domains_href.push(domain);}});if(remaining_domains_href.length){retry_count++;if(retry_count<10&&request_ahref_data==1){setTimeout(()=>{fetchAhrefData(remaining_domains_href);},2000);}else{$('.ahref_loader').replaceWith('-');retry_count=0;remaining_domains_href=[];}}
else{retry_count=0;}});}