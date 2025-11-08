#pragma once
#include <nlohmann/json.hpp>

using json = nlohmann::json;

// Function declaration
json processData(const auto& code);