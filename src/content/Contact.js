import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div class="main">
        <div class="row row-hero">
          <div class="col-xs-12 hero contact">
            <figure class="hero-ratio"></figure>
          </div>
        </div>

        <div class="row mobile-marg flex-wrap">
          <div class="col-sm-6">
            <div class="box-border">
              <h2>Our Zurich Headquarters</h2>

              <p>Adecco Group AG, Bellerivestrasse 30, 8008 Zürich, Switzerland.</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="box-border">
              <h2>Worldwide Locations</h2>

              <p>With a global reach and local knowledge we are on hand to help you, wherever you are.</p>

              <a href="/worldwide-locations/">View all locations</a>
            </div>
          </div>
        </div>

        <div class="row mobile-marg">
          <div class="col-xs-12 flex">
            <div class="col-md-4 contact-bg"></div>
            <div class="col-sm-12 col-md-8 form-bg">
              <div class="form-bg-inner">
                <h2>Send us a Message</h2>

                <div class="gf_browser_chrome gform_wrapper" id="gform_wrapper_3">
                  <form method="post" enctype="multipart/form-data" target="gform_ajax_frame_3" id="gform_3" action="/contact/">
                    <div class="gform_body">
                      <ul id="gform_fields_3" class="gform_fields top_label form_sublabel_below description_below">
                        <li id="field_3_1" class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                          <label class="gfield_label" for="input_3_1">
                            Name *<span class="gfield_required">*</span>
                          </label>
                          <div class="ginput_container ginput_container_text">
                            <input name="input_1" id="input_3_1" type="text" value="" class="medium" tabindex="1" aria-required="true" aria-invalid="false" />
                          </div>
                        </li>
                        <li id="field_3_2" class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                          <label class="gfield_label" for="input_3_2">
                            Email *<span class="gfield_required">*</span>
                          </label>
                          <div class="ginput_container ginput_container_email">
                            <input name="input_2" id="input_3_2" type="email" value="" class="medium" tabindex="2" aria-required="true" aria-invalid="false" />
                          </div>
                        </li>
                        <li id="field_3_8" class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                          <label class="gfield_label" for="input_3_8">
                            Subject *<span class="gfield_required">*</span>
                          </label>
                          <div class="ginput_container ginput_container_select">
                            <select name="input_8" id="input_3_8" class="medium gfield_select" tabindex="3" aria-required="true" aria-invalid="false">
                              <option value="reception.HQ@adecco.com">General Enquiries</option>
                              <option value="sponsoring@adecco.com">Sponsorship and Partnerships</option>
                              <option value="sustainability@adecco.com">Corporate Social Responsibility</option>
                              <option value="compliance@adecco.com">Compliance Matters</option>
                              <option value="international.sales@adecco.com">International Client Enquiries</option>
                              <option value="investor.relations@adeccogroup.com">Investor Relations</option>
                              <option value="public.affairs@adecco.com">Public Affairs</option>
                            </select>
                          </div>
                        </li>
                        <li id="field_3_3" class="gfield field_sublabel_below field_description_below gfield_visibility_visible">
                          <label class="gfield_label" for="input_3_3">
                            Message
                          </label>
                          <div class="ginput_container ginput_container_textarea">
                            <textarea name="input_3" id="input_3_3" class="textarea medium" tabindex="4" aria-invalid="false" rows="10" cols="50"></textarea>
                          </div>
                        </li>
                        <li id="field_3_4" class="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible">
                          <p>
                            Please read the{" "}
                            <a href="/terms-of-use/" target="_blank">
                              Terms of Use
                            </a>
                            ,{" "}
                            <a href="/privacy-policy/" target="_blank">
                              Privacy
                            </a>{" "}
                            and{" "}
                            <a href="/cookies-policy/" target="_blank">
                              Cookie Policies
                            </a>
                            .
                          </p>
                        </li>
                        <li id="field_3_5" class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                          <label class="gfield_label">
                            <span class="gfield_required">*</span>
                          </label>
                          <div class="ginput_container ginput_container_checkbox">
                            <ul class="gfield_checkbox" id="input_3_5">
                              <li class="gchoice_3_5_1">
                                <input name="input_5.1" type="checkbox" value="legalagreement" id="choice_3_5_1" tabindex="5" />
                                <label for="choice_3_5_1" id="label_3_5_1">
                                  * I have read and agree with the Terms of Use, Privacy and Cookie Policy
                                </label>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li id="field_3_6" class="gfield field_sublabel_below field_description_below gfield_visibility_visible">
                          <label class="gfield_label"></label>
                          <div class="ginput_container ginput_container_checkbox">
                            <ul class="gfield_checkbox" id="input_3_6">
                              <li class="gchoice_3_6_1">
                                <input name="input_6.1" type="checkbox" value="receivemarketing" id="choice_3_6_1" tabindex="6" />
                                <label for="choice_3_6_1" id="label_3_6_1">
                                  I AGREE THAT ADECCO GROUP CAN USE MY DETAILS TO SEND ME INFORMATION ABOUT THEIR ACTIVITIES. THIS MAY BE BY POST, EMAIL, SMS, MMS, PHONE, SOCIAL MEDIA, PUSH
                                  NOTIFICATIONS IN APPS AND OTHER MEANS’. I UNDERSTAND THAT I MAY OPT OUT AT ANY TIME.
                                </label>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li id="field_3_7" class="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible">
                          * indicates mandatory fields
                        </li>
                        <li id="field_3_9" class="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible">
                          <div class="g-recaptcha" data-sitekey="6LfzDWoUAAAAALa9AiVOQPc743Sarj55yHt6JgMy"></div>
                        </li>
                      </ul>
                    </div>
                    <div class="gform_footer top_label">
                      {" "}
                      <input
                        type="submit"
                        id="gform_submit_button_3"
                        class="gform_button button"
                        value="Send us Your Message"
                        tabindex="7"
                        onclick='if(window["gf_submitting_3"]){return false;}  if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  '
                        onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  jQuery("#gform_3").trigger("submit",[true]); }'
                      />{" "}
                      <input type="hidden" name="gform_ajax" value="form_id=3&amp;title=&amp;description=&amp;tabindex=1" />
                      <input type="hidden" class="gform_hidden" name="is_submit_3" value="1" />
                      <input type="hidden" class="gform_hidden" name="gform_submit" value="3" />
                      <input type="hidden" class="gform_hidden" name="gform_unique_id" value="" />
                      <input type="hidden" class="gform_hidden" name="state_3" value="WyJbXSIsIjI2ZDQzZDY5OWExYTliOGZlYzAyNDc3YjE2M2IyN2Y3Il0=" />
                      <input type="hidden" class="gform_hidden" name="gform_target_page_number_3" id="gform_target_page_number_3" value="0" />
                      <input type="hidden" class="gform_hidden" name="gform_source_page_number_3" id="gform_source_page_number_3" value="1" />
                      <input type="hidden" name="gform_field_values" value="" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
