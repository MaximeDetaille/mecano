def parsed_body
  JSON.parse(response.body)
end

def signup(registration, status = :ok)
  post api_user_registration_path, params:registration
  expect(response).to have_http_status(status)
  payload = parsed_body
  if response.ok?
    registration.merge(
      id: payload["data"]["id"],
      uid: payload["data"]["uid"]
    )
  end
end

def login(credentials, status = :ok)
  post api_user_session_path, params:credentials.slice(:email, :password)
  expect(response).to have_http_status(status)
  return response.ok? ? parsed_body["data"] : parsed_body
end

def logout(status = :ok)
  delete destroy_api_user_session_path, headers:access_tokens
  expect(response).to have_http_status(status)
end

def access_tokens?
  !response.headers["access-token"].nil? if response
end

def access_tokens
  if access_tokens?
    @last_tokens = ["uid", "client", "token-type", "access-token"].inject({}) {|h,k| h[k] = response.headers[k]; h}
  end
  @last_tokens || {}
end

["get", "patch", "post", "put", "head", "delete"].each do |http_method_name|
  define_method("j#{http_method_name}") do |path, params={}, headers={}|
    if ["patch", "post", "put"].include? http_method_name
      headers = headers.merge('content-type' => 'application/json') if !params.empty?
      params = params.to_json
    end
    self.send(
      http_method_name,
      path,
      params,
      headers.merge(access_tokens)
    )
  end
end
