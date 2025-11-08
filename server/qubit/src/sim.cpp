#include "sim.h"
#include <iostream>
#include <string>
#include <nlohmann/json.hpp>

using namespace std;
using json = nlohmann::json;

json processData(const auto& code) {
  json output;

  output["text"] = code["code"][0]["x"];

  return output;
}