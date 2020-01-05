package id.co.roxas.ui.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import id.co.roxas.ui.UltimateBase;

@Component
public class BaseController extends UltimateBase {

	protected Date isInvalidTimeStamp(String sDate) {
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyyHH");
		Date date = null;
		try {
			date = sdf.parse(sDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return date;
	}

	protected Cookie getMyCookies(String cookie, HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		for (Cookie cook : cookies) {
			if (cook.getValue().equals(cookie)) {
				return cook;
			}
		}
		return null;
	}

	protected ModelAndView pageActivation(HttpServletRequest request, HttpSession session,
			Authentication authentication, String keyAccess, String url, Map<String, Object> model,
			HttpServletResponse response) {
		response.addCookie(cookieEncryptor(KEY_ACCESS, keyAccess, session));
		return new ModelAndView(url, model);
	}

	protected String getUrlAccessing(HttpServletRequest request) {
		return request.getRequestURL().toString();
	}
}
