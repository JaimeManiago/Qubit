#include <drogon/drogon.h>
#include <iostream>
#include "filters/Cors.h"
#include "controllers/Api.h"

using namespace std;
using namespace drogon;

int main() {
    //Set HTTP listener address and port

  app()
    .loadConfigFile("../config.json")
    .addListener("0.0.0.0", 5555)
    .setThreadNum(1) // Use 1 thread for easier debugging
    .registerBeginningAdvice([]() {
        std::cout << "Server started successfully on port 5555" << std::endl;
    })
    .registerSyncAdvice([](const drogon::HttpRequestPtr& req) {
        std::cout << "Received request: " << req->methodString() << " " << req->path() << std::endl;
        return nullptr; // Continue normal processing
    })
    .run();


  cout << "Server stopped" << endl;
  return 0;
}
