#include "Api.h"
#include <iostream>
#include <nlohmann/json.hpp>

using namespace std;
using json = nlohmann::json;
    
void Api::asyncHandleHttpRequest(
  const HttpRequestPtr &req, 
  function<void(const HttpResponsePtr &)> &&callback
)
{
  /* SET UP RETURN HTTP RESPONSE*/
  auto resp = HttpResponse::newHttpResponse();

  resp->addHeader("Content-Type", "application/json");
  resp->addHeader("Access-Control-Allow-Origin", "*");
  resp->addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, PATCH");
  resp->addHeader("Access-Control-Allow-Headers", "*"); // edit to strictly come from frontend
  resp->addHeader("Access-Control-Allow-Credentials", "true");

  // if method is OPTIONS, there is no data to process
  if (req->method() != Options) {

    /* PROCESS THE RECEIVED DATA */
    json output;
    output["text"] = json::array();
    
    cout << "Beginning processing" << endl;
    auto jsonPtr = req->getJsonObject();


    if (jsonPtr->isNull()){
      output["text"] = "its null";
    }
    else if (jsonPtr->isString()) {
      Json::Reader reader;
      Json::Value dataJson;

      
      if (reader.parse(jsonPtr->asString(), dataJson)) {
       
        if (dataJson.isObject()) {
          if (dataJson.isMember("threads")) {
            auto threads = dataJson["threads"];

            // define a hashing function
            auto sti = [] (const auto str) {
              return (static_cast<uint32_t>(str[0]) << 16) | 
                     (static_cast<uint32_t>(str[1]) << 8) | 
                      static_cast<uint32_t>(str[2]);
            };

            auto eval_bool = [] (const auto str) {
              if (str=="true") return true;
              if (str=="false") return false;
              
              return true;
            };
            
            while (!threads.empty()) {
              for (Json::ArrayIndex i=threads.size(); i-- >0;) {
                
                if (threads[i]["code"].empty()) {
                  threads.removeIndex(i, nullptr);
                  continue;
                }

                /*if (threads[i].isObject()) {
                  cout << "yippee" << endl;
                  if (threads[i].isMember("code")) {
                    cout << "lets code" << endl;
                    if (threads[i]["code"].isArray()) {
                      cout << "arrrghhh" << endl;
                      if(threads[i]["code"][0].isObject()) {
                        cout << "no objection!" << endl;
                        if (threads[i]["code"][0].isMember("type")) {
                          cout << "type shit" << endl;
                          if (threads[i]["code"][0]["type"].isString()) {
                            cout << "string me! ";
                            cout << sti(threads[i]["code"][0]["type"].asString()) << endl;
                          }
                        }
                      }
                      threads[i]["code"].removeIndex(0, nullptr);
                    }
                  }
                }*/

                auto block = threads[i]["code"][0];
                switch(sti(block["type"].asString())) {
                  case sti("ife"):
                  break;
                }
                
                threads[i]["code"].removeIndex(0, nullptr);
              }
            }
          }
        }
      }
    }
    else {
      output["text"] = "watdahellyante";
    }


    // set the return JSON to the return http response body
    resp->setBody(output.dump());
  }


  cout << "done processing" << endl;
  resp->setStatusCode(k200OK);
  callback(resp);
}