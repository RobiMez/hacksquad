import { ChannelTypeEnum, Notifire } from '@notifire/core';

export async function loadTemplates(notifire: Notifire) {
  await notifire.registerTemplate({
    id: 'organization-invite',
    messages: [
      {
        channel: ChannelTypeEnum.EMAIL,
        subject: 'Join {{squadName}} squad',
        template: buildLayout(`
            <a href=""></a>
        `),
      },
    ],
  });
}

function buildLayout(content: string) {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
  data-editor-version="2"
  class="sg-campaigns"
  xmlns="http://www.w3.org/1999/xhtml"
>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
  />
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG />
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <style type='text/css'>
    body {
      width: 600px;
      margin: 0 auto;
    }

    table {
      border-collapse: collapse;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }
  </style>
  <![endif]-->
  <style type="text/css">
    body,
    p,
    div {
      font-family: verdana, geneva, sans-serif;
      font-size: 16px;
    }

    body {
      color: #516775;
    }

    body a {
      color: #993300;
      text-decoration: none;
    }

    p {
      margin: 0;
      padding: 0;
    }

    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img.max-width {
      max-width: 100% !important;
    }

    .column.of-2 {
      width: 50%;
    }

    .column.of-3 {
      width: 33.333%;
    }

    .column.of-4 {
      width: 25%;
    }

    @media screen and (max-width: 480px) {

      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }

      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }

      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }

      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }

      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }

      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .columns {
        width: 100% !important;
      }

      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
  <!--user entered Head Start-->

  <!--End Head user entered-->
</head>
<body bgcolor="#f9f9f9">
<center
  class="wrapper"
  data-link-color="#993300"
  data-body-style="font-size:16px; font-family:verdana,geneva,sans-serif; color:#516775; background-color:#f9f9f9;"
>
  <div class="webkit">
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      class="wrapper"
      bgcolor="#f9f9f9"
    >
      <tr>
        <td valign="top" bgcolor="#f9f9f9" width="100%">
          <table
            width="100%"
            role="content-container"
            class="outer"
            align="center"
            cellpadding="0"
            cellspacing="0"
            border="0"
          >
            <tr>
              <td width="100%">
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <td>
                      <!--[if mso]>
                      <center>
                        <table>
                          <tr>
                            <td width='600'>
                      <![endif]-->
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="width: 100%; max-width: 600px"
                        align="center"
                      >
                        <tr>
                          <td
                            role="modules-container"
                            style="
                                  padding: 0px 0px 0px 0px;
                                  color: #516775;
                                  text-align: left;
                                "
                            bgcolor="#f9f9f9"
                            width="100%"
                            align="left"
                          >
                            <table
                              class="wrapper"
                              role="module"
                              data-type="image"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout: fixed"
                              data-muid="4UqFsRLozLcypAAv4CeoFS"
                            >
                              <tbody>
                              <tr>
                                <td
                                  style="
                                          font-size: 6px;
                                          line-height: 10px;
                                          padding: 30px 0px 0px 0px;
                                        "
                                  valign="top"
                                  align="center"
                                >
                                  <img
                                    class="max-width"
                                    border="0"
                                    style="
                                            display: block;
                                            color: #000000;
                                            text-decoration: none;
                                            font-family: Helvetica, arial,
                                              sans-serif;
                                            font-size: 16px;
                                            max-width: 240px !important;
                                            width: 50%;
                                            height: auto !important;
                                          "
                                    src="{{branding.logo}}"
                                    alt=""
                                    width="200"
                                    data-responsive="true"
                                    data-proportionally-constrained="false"
                                  />
                                </td>
                              </tr>
                              </tbody>
                            </table>
                            <table
                              class="module"
                              role="module"
                              data-type="spacer"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout: fixed"
                              data-muid="iqe7juSSgLbdm3gXWExpsY"
                            >
                              <tbody>
                              <tr>
                                <td
                                  style="padding: 0px 0px 30px 0px"
                                  role="module-content"
                                  bgcolor=""
                                ></td>
                              </tr>
                              </tbody>
                            </table>


                            <table
                              class="module"
                              role="module"
                              data-type="text"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
  style="      background-color: #ffffff; border: 1px solid #efefef; table-layout: fixed; border-top: 4px solid {{#if branding.color}}{{branding.color}}{{else}}#ff6f61{{/if}};  "
                              data-muid="8VquPM2ZMj7RJRhAUE6wmF"
                              data-mc-module-version="2019-10-22"
                            >
                              <tbody>
                              <tr>
                                <td
                                  data-test-id="block-wrapper"
                                  style="

                                          padding: 30px;
                                          line-height: 30px;
                                          text-align: inherit;
                                        "
                                  height="100%"
                                  valign="top"
                                  bgcolor="#ffffff"
                                >
                                  ${content}
                                </td>
                              </tr>
                              </tbody>
                            </table>

                            <table
                              class="module"
                              role="module"
                              data-type="spacer"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout: fixed"
                              data-muid="h5Act64miE4yjzNnz1YMGs"
                            >
                              <tbody>
                              <tr>
                                <td
                                  style="padding: 0px 0px 30px 0px"
                                  role="module-content"
                                  bgcolor=""
                                ></td>
                              </tr>
                              </tbody>
                            </table>
                            <table
                              class="module"
                              role="module"
                              data-type="divider"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout: fixed"
                              data-muid="jw3c3eYnz3qZ2aqby3rNPX"
                            >
                              <tbody>
                              <tr>
                                <td
                                  style="padding: 0px 0px 0px 0px"
                                  role="module-content"
                                  height="100%"
                                  valign="top"
                                  bgcolor=""
                                >

                                </td>
                              </tr>
                              </tbody>
                            </table>
                            <table
                              class="module"
                              role="module"
                              data-type="spacer"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout: fixed"
                              data-muid="noXVUxSTfKbdSVM2Xrua2t"
                            >
                              <tbody>
                              <tr>
                                <td
                                  style="padding: 0px 0px 30px 0px"
                                  role="module-content"
                                  bgcolor=""
                                ></td>
                              </tr>
                              </tbody>
                            </table>
                            <table
                              class="module"
                              role="module"
                              data-type="spacer"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout: fixed"
                              data-muid="eAq5DwvRYWV4D7T3oBCXhH"
                            >
                              <tbody>
                              <tr>
                                <td
                                  style="padding: 0px 0px 30px 0px"
                                  role="module-content"
                                  bgcolor=""
                                ></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]>
                      </td>
                      </tr>
                      </table>
                      </center>
                      <![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</center>
</body>
</html>
  `;
}
